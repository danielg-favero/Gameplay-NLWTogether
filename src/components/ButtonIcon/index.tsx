import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    Text,
    Image,
    View,
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
    title: string
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ title, ...rest }) => {
    return (
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image 
                    source={DiscordImg}
                    style={styles.icon}
                />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}