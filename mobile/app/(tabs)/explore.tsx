import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#9400D3', dark: '#9400D3' }}
     >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Extrato</ThemedText>
      </ThemedView>
      <Collapsible title="21/04/2025 13:43 Transferiu">
        <ThemedText>
          Para: Maria Luiza 
        </ThemedText>
        <ThemedText> 
          CPF: 123.***.***-**
        </ThemedText>
        <ThemedText>
          Valor: R$11,00
        </ThemedText>
      </Collapsible>
      <Collapsible title="18/04/2025 19:37 Recebeu">
        <ThemedText>
          De: Mateus Carlos de Souza   
        </ThemedText>
        <ThemedText> 
          CPF: 901.***.***-**
        </ThemedText>
        <ThemedText>
          Valor: R$91,23
        </ThemedText>
      </Collapsible>
      <Collapsible title="12/04/2025 21:53 Transferiu">
        <ThemedText>
          Para: Joana Souza 
          </ThemedText>
          <ThemedText> 
          CPF: 910.***.***-**
        </ThemedText>
          <ThemedText>
            Valor:R$32,12
            </ThemedText> 
      </Collapsible>
      <Collapsible title="01/04/2025 12:10 Transferiu">
        <ThemedText>
          Para: Luis Polaco
          </ThemedText>
          <ThemedText> 
          CPF: 172.***.***-**
        </ThemedText>
          <ThemedText>
            Valor: R$8,19
          </ThemedText>
      </Collapsible>
      <Collapsible title="21/02/2025 23:43 Recebeu">
        <ThemedText>
          De: Davi Souza 
        </ThemedText>
        <ThemedText> 
          CPF: 892.***.***-**
        </ThemedText>
        <ThemedText>
          Valor: R$1,23
        </ThemedText>
      </Collapsible>
      <Collapsible title="01/01/2025 10:20 Recebeu">
        <ThemedText>
          De: Paola Mendes
        </ThemedText>
        <ThemedText> 
          CPF: 321.***.***-**
        </ThemedText>
        <ThemedText>
          Valor: R$90,23
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
