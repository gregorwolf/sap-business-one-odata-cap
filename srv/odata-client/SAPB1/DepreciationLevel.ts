/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationCalculationBaseEnum } from './DepreciationCalculationBaseEnum';
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
 * DepreciationLevel
 */
export interface DepreciationLevel<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Level.
   * @nullable
   */
  level?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depreciation Calculation Base.
   * @nullable
   */
  depreciationCalculationBase?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Number Of Years.
   * @nullable
   */
  numberOfYears?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Percentage.
   * @nullable
   */
  percentage?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount.
   * @nullable
   */
  amount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * DepreciationLevelField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DepreciationLevelField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DepreciationLevel,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DepreciationLevel.level} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  level: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Level', 'Edm.Int32', true);
  /**
   * Representation of the {@link DepreciationLevel.depreciationCalculationBase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationCalculationBase: EnumField<
    EntityT,
    DeSerializersT,
    DepreciationCalculationBaseEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DepreciationCalculationBase',
    DepreciationCalculationBaseEnum,
    true
  );
  /**
   * Representation of the {@link DepreciationLevel.numberOfYears} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfYears: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NumberOfYears', 'Edm.Int32', true);
  /**
   * Representation of the {@link DepreciationLevel.percentage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Percentage', 'Edm.Double', true);
  /**
   * Representation of the {@link DepreciationLevel.amount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Amount', 'Edm.Double', true);

  /**
   * Creates an instance of DepreciationLevelField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DepreciationLevel, fieldOptions);
  }
}

export namespace DepreciationLevel {
  /**
   * Metadata information on all properties of the `DepreciationLevel` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DepreciationLevel>[] = [
    {
      originalName: 'Level',
      name: 'level',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DepreciationCalculationBase',
      name: 'depreciationCalculationBase',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NumberOfYears',
      name: 'numberOfYears',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Percentage',
      name: 'percentage',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Amount',
      name: 'amount',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
