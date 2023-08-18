/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CounterTypeEnum } from './CounterTypeEnum';
import { MultipleCounterRoleEnum } from './MultipleCounterRoleEnum';
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
 * InventoryCountingLineUoM
 */
export interface InventoryCountingLineUoM<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Child Number.
   * @nullable
   */
  childNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uo M Counted Quantity.
   * @nullable
   */
  uoMCountedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Items Per Unit.
   * @nullable
   */
  itemsPerUnit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Counted Quantity.
   * @nullable
   */
  countedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Counter Type.
   * @nullable
   */
  counterType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Multiple Counter Role.
   * @nullable
   */
  multipleCounterRole?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * InventoryCountingLineUoMField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingLineUoMField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryCountingLineUoM,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryCountingLineUoM.documentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingLineUoM.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingLineUoM.childNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  childNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ChildNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingLineUoM.uoMCountedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCountedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UoMCountedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InventoryCountingLineUoM.itemsPerUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemsPerUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemsPerUnit', 'Edm.Double', true);
  /**
   * Representation of the {@link InventoryCountingLineUoM.countedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CountedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InventoryCountingLineUoM.uoMCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMCode', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryCountingLineUoM.barCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryCountingLineUoM.counterType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: EnumField<
    EntityT,
    DeSerializersT,
    CounterTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CounterType', CounterTypeEnum, true);
  /**
   * Representation of the {@link InventoryCountingLineUoM.counterId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CounterID', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingLineUoM.multipleCounterRole} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multipleCounterRole: EnumField<
    EntityT,
    DeSerializersT,
    MultipleCounterRoleEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'MultipleCounterRole',
    MultipleCounterRoleEnum,
    true
  );

  /**
   * Creates an instance of InventoryCountingLineUoMField.
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
      InventoryCountingLineUoM,
      fieldOptions
    );
  }
}

export namespace InventoryCountingLineUoM {
  /**
   * Metadata information on all properties of the `InventoryCountingLineUoM` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCountingLineUoM>[] =
    [
      {
        originalName: 'DocumentEntry',
        name: 'documentEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ChildNumber',
        name: 'childNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UoMCountedQuantity',
        name: 'uoMCountedQuantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ItemsPerUnit',
        name: 'itemsPerUnit',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CountedQuantity',
        name: 'countedQuantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'UoMCode',
        name: 'uoMCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BarCode',
        name: 'barCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'CounterType',
        name: 'counterType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'CounterID',
        name: 'counterId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'MultipleCounterRole',
        name: 'multipleCounterRole',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
