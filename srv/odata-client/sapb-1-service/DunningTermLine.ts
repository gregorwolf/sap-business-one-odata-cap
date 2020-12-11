/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DunningLetterTypeEnum } from './DunningLetterTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Letter Format.
   * @nullable
   */
  letterFormat?: DunningLetterTypeEnum;
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
  /**
   * Calculate Interest.
   * @nullable
   */
  calculateInterest?: BoYesNoEnum;
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
export class DunningTermLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DunningTermLine> {
  /**
   * Representation of the [[DunningTermLine.levelNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  levelNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LevelNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DunningTermLine.letterFormat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  letterFormat: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LetterFormat', this);
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
  /**
   * Representation of the [[DunningTermLine.calculateInterest]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateInterest: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CalculateInterest', this);

  /**
   * Creates an instance of DunningTermLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DunningTermLine);
  }
}

export namespace DunningTermLine {
  /**
   * Metadata information on all properties of the `DunningTermLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DunningTermLine>[] = [{
    originalName: 'LevelNum',
    name: 'levelNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LetterFormat',
    name: 'letterFormat',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Effectiveafter',
    name: 'effectiveafter',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LetterFee',
    name: 'letterFee',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LetterFeeCurrency',
    name: 'letterFeeCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MininumBalance',
    name: 'mininumBalance',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MininumBalanceCurrency',
    name: 'mininumBalanceCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CalculateInterest',
    name: 'calculateInterest',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DunningTermLine {
    return deserializeComplexTypeV4(json, DunningTermLine);
  }
}
