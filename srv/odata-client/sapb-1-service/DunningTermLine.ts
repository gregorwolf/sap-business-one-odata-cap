/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DunningTermLine
 */
export interface DunningTermLine {
  /**
   * Level Num.
   * @nullable
   */
  levelNum?: number;
  /**
   * Effectiveafter.
   * @nullable
   */
  effectiveafter?: string;
  /**
   * Letter Fee.
   * @nullable
   */
  letterFee?: number;
  /**
   * Letter Fee Currency.
   * @nullable
   */
  letterFeeCurrency?: string;
  /**
   * Mininum Balance.
   * @nullable
   */
  mininumBalance?: number;
  /**
   * Mininum Balance Currency.
   * @nullable
   */
  mininumBalanceCurrency?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DunningTermLine.build]] instead.
 */
export function createDunningTermLine(json: any): DunningTermLine {
  return DunningTermLine.build(json);
}

/**
 * DunningTermLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DunningTermLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DunningTermLine.levelNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  levelNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LevelNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DunningTermLine.effectiveafter]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveafter: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Effectiveafter', this, 'Edm.String');
  /**
   * Representation of the [[DunningTermLine.letterFee]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  letterFee: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LetterFee', this, 'Edm.Double');
  /**
   * Representation of the [[DunningTermLine.letterFeeCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  letterFeeCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LetterFeeCurrency', this, 'Edm.String');
  /**
   * Representation of the [[DunningTermLine.mininumBalance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mininumBalance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MininumBalance', this, 'Edm.Double');
  /**
   * Representation of the [[DunningTermLine.mininumBalanceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mininumBalanceCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MininumBalanceCurrency', this, 'Edm.String');
}

export namespace DunningTermLine {
  export function build(json: { [keys: string]: FieldType }): DunningTermLine {
    return createComplexType(json, {
      LevelNum: (levelNum: number) => ({ levelNum: edmToTs(levelNum, 'Edm.Int32') }),
      Effectiveafter: (effectiveafter: string) => ({ effectiveafter: edmToTs(effectiveafter, 'Edm.String') }),
      LetterFee: (letterFee: number) => ({ letterFee: edmToTs(letterFee, 'Edm.Double') }),
      LetterFeeCurrency: (letterFeeCurrency: string) => ({ letterFeeCurrency: edmToTs(letterFeeCurrency, 'Edm.String') }),
      MininumBalance: (mininumBalance: number) => ({ mininumBalance: edmToTs(mininumBalance, 'Edm.Double') }),
      MininumBalanceCurrency: (mininumBalanceCurrency: string) => ({ mininumBalanceCurrency: edmToTs(mininumBalanceCurrency, 'Edm.String') })
    });
  }
}
