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
 * ElectronicSeries
 */
export interface ElectronicSeries<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Electronic Series Property.
   * @nullable
   */
  electronicSeriesProperty?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Initial Number.
   * @nullable
   */
  initialNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Next Number.
   * @nullable
   */
  nextNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Last Number.
   * @nullable
   */
  lastNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Prefix.
   * @nullable
   */
  prefix?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Approval Year.
   * @nullable
   */
  approvalYear?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Approval Number.
   * @nullable
   */
  approvalNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ElectronicSeriesField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ElectronicSeriesField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ElectronicSeries,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ElectronicSeries.electronicSeriesProperty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicSeriesProperty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ElectronicSeriesProperty',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ElectronicSeries.series} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true);
  /**
   * Representation of the {@link ElectronicSeries.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicSeries.initialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  initialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InitialNumber', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicSeries.nextNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NextNumber', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicSeries.lastNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LastNumber', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicSeries.prefix} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prefix: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Prefix', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicSeries.approvalYear} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalYear: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ApprovalYear', 'Edm.Int32', true);
  /**
   * Representation of the {@link ElectronicSeries.approvalNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ApprovalNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ElectronicSeries.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);

  /**
   * Creates an instance of ElectronicSeriesField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ElectronicSeries, fieldOptions);
  }
}

export namespace ElectronicSeries {
  /**
   * Metadata information on all properties of the `ElectronicSeries` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ElectronicSeries>[] = [
    {
      originalName: 'ElectronicSeriesProperty',
      name: 'electronicSeriesProperty',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Series',
      name: 'series',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InitialNumber',
      name: 'initialNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NextNumber',
      name: 'nextNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LastNumber',
      name: 'lastNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Prefix',
      name: 'prefix',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ApprovalYear',
      name: 'approvalYear',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ApprovalNumber',
      name: 'approvalNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
