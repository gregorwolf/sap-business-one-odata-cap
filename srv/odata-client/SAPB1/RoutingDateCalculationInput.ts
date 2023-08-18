/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
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
 * RoutingDateCalculationInput
 */
export interface RoutingDateCalculationInput<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Resource Code.
   * @nullable
   */
  resourceCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Calculate From Date.
   * @nullable
   */
  calculateFromDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Calculate Until Date.
   * @nullable
   */
  calculateUntilDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Capacity Sum.
   * @nullable
   */
  capacitySum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * First Date Proportion.
   * @nullable
   */
  firstDateProportion?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Resource Alloc.
   * @nullable
   */
  resourceAlloc?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Wor Obj Abs.
   * @nullable
   */
  worObjAbs?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Wor Line.
   * @nullable
   */
  worLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * RoutingDateCalculationInputField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RoutingDateCalculationInputField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RoutingDateCalculationInput,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RoutingDateCalculationInput.resourceCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resourceCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ResourceCode', 'Edm.String', true);
  /**
   * Representation of the {@link RoutingDateCalculationInput.warehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WarehouseCode', 'Edm.String', true);
  /**
   * Representation of the {@link RoutingDateCalculationInput.calculateFromDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateFromDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CalculateFromDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link RoutingDateCalculationInput.calculateUntilDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateUntilDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CalculateUntilDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link RoutingDateCalculationInput.capacitySum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  capacitySum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CapacitySum', 'Edm.Double', true);
  /**
   * Representation of the {@link RoutingDateCalculationInput.firstDateProportion} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstDateProportion: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FirstDateProportion',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link RoutingDateCalculationInput.resourceAlloc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resourceAlloc: EnumField<
    EntityT,
    DeSerializersT,
    ResourceAllocationEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ResourceAlloc',
    ResourceAllocationEnum,
    true
  );
  /**
   * Representation of the {@link RoutingDateCalculationInput.worObjAbs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  worObjAbs: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WORObjAbs', 'Edm.Int32', true);
  /**
   * Representation of the {@link RoutingDateCalculationInput.worLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  worLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WORLine', 'Edm.Int32', true);

  /**
   * Creates an instance of RoutingDateCalculationInputField.
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
      RoutingDateCalculationInput,
      fieldOptions
    );
  }
}

export namespace RoutingDateCalculationInput {
  /**
   * Metadata information on all properties of the `RoutingDateCalculationInput` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RoutingDateCalculationInput>[] =
    [
      {
        originalName: 'ResourceCode',
        name: 'resourceCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'WarehouseCode',
        name: 'warehouseCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'CalculateFromDate',
        name: 'calculateFromDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'CalculateUntilDate',
        name: 'calculateUntilDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'CapacitySum',
        name: 'capacitySum',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'FirstDateProportion',
        name: 'firstDateProportion',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ResourceAlloc',
        name: 'resourceAlloc',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'WORObjAbs',
        name: 'worObjAbs',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'WORLine',
        name: 'worLine',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
