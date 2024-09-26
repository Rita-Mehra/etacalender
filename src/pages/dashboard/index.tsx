import { useState } from 'react';
import Image from 'next/image';
import { Tabs, Tab, Box, Grid } from '@mui/material';
import { Close, Troubleshoot } from '@mui/icons-material';
import CircleProgress from '../../component/duration-data/CircleProgress';
import ColorCircleProgress from '../../component/duration-data/ColorCircleProgress';
import tabList from "@/utils/tab-list";
import smallCircles from "@/utils/tab-day-data";
import { Truculenta } from 'next/font/google';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export default function Dashboard() {

    const [value, setValue] = useState(0);
    const [isActive, setIsActive] = useState(true);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <div className="mobile-view">
            <div className=" pt-[3rem]">
                <div className="flex font-20 text-black justify-start  px-5">
                    Welcome Alex
                    <span className="ml-2">
                        <Image
                            src="/images/waving-hand.svg"
                            width={28}
                            height={28}
                            alt="waveing hand"
                            className="mx-auto"
                        />
                    </span>
                </div>
                <div className="text-primary font-14 mt-2 mb-2 px-5">March  7,  2024</div>

                <div className="w-100">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tab-container">
                            <Tabs value={value} onChange={handleChange} aria-label="tabs">
                                {tabList.map((item) => (
                                    <Tab key={item.id} label={item.label} {...a11yProps(item.number)} />
                                ))}
                            </Tabs>
                        </Box>
                        <div className="flex justify-around mt-4">
                            <div className="color-box blue-tiel">Elapsed</div>
                            <div className="color-box light-tiel">Remaining</div>
                        </div>
                        {tabList.map((item: any) => (
                            <CustomTabPanel value={value} index={item.number}>
                                <div style={{ width: 260, height: 260, margin: 'auto' }}>
                                    <CircleProgress
                                        value={item.valueNum}
                                        imageSrc={item.imgsrc}
                                        imageSize={50}
                                        text={item.text}
                                        textSize={12}
                                    />
                                </div>
                                <div className="mt-4">
                                    <Grid container>
                                        {smallCircles.map((item: any) => (
                                            <Grid item xs={4} key={item.id}>
                                                <ColorCircleProgress
                                                    value={item.valueNum}
                                                    text={item.text}
                                                    textSize={12}
                                                    className={item.className}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            </CustomTabPanel>
                        ))}

                        {isActive ?
                            <div className="banner-wrapper relative">
                                <Close className="cross" onClick={() => setIsActive(!isActive)} />
                                <img src="/images/banner.jpg" />
                            </div>
                            : null}
                    </Box>
                </div>
            </div>
        </div>
    );
}
