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
 * CycleCountDeterminationSetup
 */
export interface CycleCountDeterminationSetup<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Entry.
   * @nullable
   */
  entry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
   * Destination User.
   * @nullable
   */
  destinationUser?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Next Counting Date.
   * @nullable
   */
  nextCountingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Time.
   * @nullable
   */
  time?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Exclude Items With Zero Quantity.
   * @nullable
   */
  excludeItemsWithZeroQuantity?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Change Existing Items.
   * @nullable
   */
  changeExistingItems?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * CycleCountDeterminationSetupField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CycleCountDeterminationSetupField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CycleCountDeterminationSetup,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CycleCountDeterminationSetup.warehouseCode} property for query construction.
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
   * Representation of the {@link CycleCountDeterminationSetup.entry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Entry', 'Edm.Int32', true);
  /**
   * Representation of the {@link CycleCountDeterminationSetup.cycleCode} property for query construction.
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
   * Representation of the {@link CycleCountDeterminationSetup.alert} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alert: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Alert', BoYesNoEnum, true);
  /**
   * Representation of the {@link CycleCountDeterminationSetup.destinationUser} property for query construction.
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
   * Representation of the {@link CycleCountDeterminationSetup.nextCountingDate} property for query construction.
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
   * Representation of the {@link CycleCountDeterminationSetup.time} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  time: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Time', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link CycleCountDeterminationSetup.excludeItemsWithZeroQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  excludeItemsWithZeroQuantity: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ExcludeItemsWithZeroQuantity',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CycleCountDeterminationSetup.changeExistingItems} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeExistingItems: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ChangeExistingItems',
    BoYesNoEnum,
    true
  );

  /**
   * Creates an instance of CycleCountDeterminationSetupField.
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
      CycleCountDeterminationSetup,
      fieldOptions
    );
  }
}

export namespace CycleCountDeterminationSetup {
  /**
   * Metadata information on all properties of the `CycleCountDeterminationSetup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CycleCountDeterminationSetup>[] =
    [
      {
        originalName: 'WarehouseCode',
        name: 'warehouseCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Entry',
        name: 'entry',
        type: 'Edm.Int32',
        isCollection: false
      },
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
        originalName: 'DestinationUser',
        name: 'destinationUser',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'NextCountingDate',
        name: 'nextCountingDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'Time',
        name: 'time',
        type: 'Edm.TimeOfDay',
        isCollection: false
      },
      {
        originalName: 'ExcludeItemsWithZeroQuantity',
        name: 'excludeItemsWithZeroQuantity',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'ChangeExistingItems',
        name: 'changeExistingItems',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
