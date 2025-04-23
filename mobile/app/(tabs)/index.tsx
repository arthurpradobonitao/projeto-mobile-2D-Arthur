import { Image, StyleSheet, Pressable, Text, colorScheme,  Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/nubanklogo.webp')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá Arthur!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo disponível: </ThemedText>
        <ThemedText>
          R$1.234,43
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Seu dinheiro</ThemedText>
        <Pressable style={styles.botaoum}>
       <Text style={styles.legendabotaoum}>Meus cartões</Text>
      </Pressable>
      <Pressable style={styles.botaoum}>
       <Text style={styles.legendabotaoum}>Caixinha</Text>
      </Pressable>
      </ThemedView>
      <ThemedView style={styles.espacodosbotao}>
       <ThemedView style={styles.botaocontainer}>
        <Pressable style={styles.botao2}>
        <Image
         source={require('@/assets/images/logo1r.png')} 
         style={styles.imagembotao}
        />
        </Pressable>
        <Text style={[styles.botaolegenda, { color: colorScheme ==='dark'?'#fff':'#000'}]}>PIX</Text>
       </ThemedView>
       <ThemedView style={styles.botaocontainer}>
        <Pressable style={styles.botao2}>
        <Image
         source={require('@/assets/images/logo2r.png')} 
         style={styles.imagembotao}
        />
        </Pressable>
        <Text style={[styles.botaolegenda, { color: colorScheme ==='dark'?'#fff':'#000'}]}>PAGAR</Text>
       </ThemedView>
       <ThemedView style={styles.botaocontainer}>
        <Pressable style={styles.botao2}>
        <Image
         source={require('@/assets/images/logo3r.png')} 
         style={styles.imagembotao}
        />
        </Pressable>
        <Text style={[styles.botaolegenda, { color: colorScheme ==='dark'?'#fff':'#000'}]}>TRANS..</Text>
       </ThemedView>
       <ThemedView style={styles.botaocontainer}>
        <Pressable style={styles.botao2}>
        <Image
         source={require('@/assets/images/logo4r.png')} 
         style={styles.imagembotao}
        />
        </Pressable>
        <Text style={[styles.botaolegenda, { color: colorScheme ==='dark'?'#fff':'#000'}]}>DEPOSITAR</Text>
       </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saiba mais</ThemedText>
        <ThemedText>Interface criada por Arthur Mota do Prado</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  botaoum: {
    width: "100%",
    backgroundColor: '#9400D3', 
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    alignSelf: 'center',
  },
  legendabotaoum: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  espacodosbotao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    gap: 16,
  },
  botaocontainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  botao2: {
    backgroundColor: '#9400D3',
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagembotao: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  botaolegenda: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
