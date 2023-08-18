/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DunningLetterTypeEnum } from './DunningLetterTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * DunningTermLine
 */
export interface DunningTermLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Level Num.
   * @nullable
   */
  levelNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Letter Format.
   * @nullable
   */
  letterFormat?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Effectiveafter.
   * @nullable
   */
  effectiveafter?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Letter Fee.
   * @nullable
   */
  letterFee?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Letter Fee Currency.
   * @nullable
   */
  letterFeeCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Mininum Balance.
   * @nullable
   */
  mininumBalance?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Mininum Balance Currency.
   * @nullable
   */
  mininumBalanceCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Calculate Interest.
   * @nullable
   */
  calculateInterest?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DunningTermLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DunningTermLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DunningTermLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DunningTermLine.levelNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  levelNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LevelNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DunningTermLine.letterFormat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  letterFormat: EnumField<
    EntityT,
    DeSerializersT,
    DunningLetterTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LetterFormat',
    DunningLetterTypeEnum,
    true
  );
  /**
   * Representation of the {@link DunningTermLine.effectiveafter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveafter: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Effectiveafter',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DunningTermLine.letterFee} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  letterFee: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LetterFee', 'Edm.Double', true);
  /**
   * Representation of the {@link DunningTermLine.letterFeeCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  letterFeeCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LetterFeeCurrency',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DunningTermLine.mininumBalance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mininumBalance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MininumBalance',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DunningTermLine.mininumBalanceCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mininumBalanceCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MininumBalanceCurrency',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DunningTermLine.calculateInterest} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateInterest: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CalculateInterest', BoYesNoEnum, true);

  /**
   * Creates an instance of DunningTermLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DunningTermLine, fieldOptions);
  }
}

export namespace DunningTermLine {
  /**
   * Metadata information on all properties of the `DunningTermLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DunningTermLine>[] = [
    {
      originalName: 'LevelNum',
      name: 'levelNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LetterFormat',
      name: 'letterFormat',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Effectiveafter',
      name: 'effectiveafter',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LetterFee',
      name: 'letterFee',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LetterFeeCurrency',
      name: 'letterFeeCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MininumBalance',
      name: 'mininumBalance',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MininumBalanceCurrency',
      name: 'mininumBalanceCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CalculateInterest',
      name: 'calculateInterest',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
