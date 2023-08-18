/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ItemDepreciationParameter
 */
export interface ItemDepreciationParameter<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Depreciation Start Date.
   * @nullable
   */
  depreciationStartDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Depreciation End Date.
   * @nullable
   */
  depreciationEndDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Useful Life.
   * @nullable
   */
  usefulLife?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Remaining Life.
   * @nullable
   */
  remainingLife?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Depreciation Type.
   * @nullable
   */
  depreciationType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Total Units In Useful Life.
   * @nullable
   */
  totalUnitsInUsefulLife?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Remaining Units.
   * @nullable
   */
  remainingUnits?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Standard Units.
   * @nullable
   */
  standardUnits?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ItemDepreciationParameterField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemDepreciationParameterField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemDepreciationParameter,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemDepreciationParameter.fiscalYear} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FiscalYear', 'Edm.String', true);
  /**
   * Representation of the {@link ItemDepreciationParameter.depreciationArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationArea',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemDepreciationParameter.depreciationStartDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationStartDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationStartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ItemDepreciationParameter.depreciationEndDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationEndDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationEndDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ItemDepreciationParameter.usefulLife} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usefulLife: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UsefulLife', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemDepreciationParameter.remainingLife} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingLife: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RemainingLife', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemDepreciationParameter.depreciationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemDepreciationParameter.totalUnitsInUsefulLife} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalUnitsInUsefulLife: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalUnitsInUsefulLife',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemDepreciationParameter.remainingUnits} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingUnits: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RemainingUnits', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemDepreciationParameter.standardUnits} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardUnits: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StandardUnits', 'Edm.Int32', true);

  /**
   * Creates an instance of ItemDepreciationParameterField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ItemDepreciationParameter,
      fieldOptions
    );
  }
}

export namespace ItemDepreciationParameter {
  /**
   * Metadata information on all properties of the `ItemDepreciationParameter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemDepreciationParameter>[] =
    [
      {
        originalName: 'FiscalYear',
        name: 'fiscalYear',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DepreciationArea',
        name: 'depreciationArea',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DepreciationStartDate',
        name: 'depreciationStartDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'DepreciationEndDate',
        name: 'depreciationEndDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'UsefulLife',
        name: 'usefulLife',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'RemainingLife',
        name: 'remainingLife',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DepreciationType',
        name: 'depreciationType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TotalUnitsInUsefulLife',
        name: 'totalUnitsInUsefulLife',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'RemainingUnits',
        name: 'remainingUnits',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'StandardUnits',
        name: 'standardUnits',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
