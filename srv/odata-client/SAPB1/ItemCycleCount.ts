/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ItemCycleCount
 */
export interface ItemCycleCount<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Cycle Code.
   * @nullable
   */
  cycleCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Alert.
   * @nullable
   */
  alert?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Next Counting Date.
   * @nullable
   */
  nextCountingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Alert Time.
   * @nullable
   */
  alertTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Destination User.
   * @nullable
   */
  destinationUser?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ItemCycleCountField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemCycleCountField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemCycleCount,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemCycleCount.cycleCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CycleCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemCycleCount.alert} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alert: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Alert', BoYesNoEnum, true);
  /**
   * Representation of the {@link ItemCycleCount.nextCountingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextCountingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NextCountingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ItemCycleCount.alertTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AlertTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link ItemCycleCount.destinationUser} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  destinationUser: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DestinationUser',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemCycleCount.warehouseCode} property for query construction.
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
   * Creates an instance of ItemCycleCountField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ItemCycleCount, fieldOptions);
  }
}

export namespace ItemCycleCount {
  /**
   * Metadata information on all properties of the `ItemCycleCount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemCycleCount>[] = [
    {
      originalName: 'CycleCode',
      name: 'cycleCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Alert',
      name: 'alert',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NextCountingDate',
      name: 'nextCountingDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'AlertTime',
      name: 'alertTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'DestinationUser',
      name: 'destinationUser',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WarehouseCode',
      name: 'warehouseCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
