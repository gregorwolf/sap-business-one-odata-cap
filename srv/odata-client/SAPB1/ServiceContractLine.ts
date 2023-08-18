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
 * ServiceContractLine
 */
export interface ServiceContractLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Manufacturer Serial Num.
   * @nullable
   */
  manufacturerSerialNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Internal Serial Num.
   * @nullable
   */
  internalSerialNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Group.
   * @nullable
   */
  itemGroup?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Item Group Name.
   * @nullable
   */
  itemGroupName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Termination Date.
   * @nullable
   */
  terminationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * ServiceContractLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceContractLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ServiceContractLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ServiceContractLine.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceContractLine.manufacturerSerialNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ManufacturerSerialNum',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceContractLine.internalSerialNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InternalSerialNum',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceContractLine.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceContractLine.itemName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemName', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceContractLine.itemGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemGroup', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceContractLine.startDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ServiceContractLine.endDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ServiceContractLine.itemGroupName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroupName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemGroupName', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceContractLine.terminationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  terminationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TerminationDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of ServiceContractLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ServiceContractLine, fieldOptions);
  }
}

export namespace ServiceContractLine {
  /**
   * Metadata information on all properties of the `ServiceContractLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceContractLine>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ManufacturerSerialNum',
      name: 'manufacturerSerialNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InternalSerialNum',
      name: 'internalSerialNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemName',
      name: 'itemName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemGroup',
      name: 'itemGroup',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StartDate',
      name: 'startDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'EndDate',
      name: 'endDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ItemGroupName',
      name: 'itemGroupName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TerminationDate',
      name: 'terminationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
