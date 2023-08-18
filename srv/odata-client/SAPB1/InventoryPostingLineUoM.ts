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
 * InventoryPostingLineUoM
 */
export interface InventoryPostingLineUoM<
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
}

/**
 * InventoryPostingLineUoMField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryPostingLineUoMField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryPostingLineUoM,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryPostingLineUoM.documentEntry} property for query construction.
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
   * Representation of the {@link InventoryPostingLineUoM.lineNumber} property for query construction.
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
   * Representation of the {@link InventoryPostingLineUoM.childNumber} property for query construction.
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
   * Representation of the {@link InventoryPostingLineUoM.uoMCountedQuantity} property for query construction.
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
   * Representation of the {@link InventoryPostingLineUoM.itemsPerUnit} property for query construction.
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
   * Representation of the {@link InventoryPostingLineUoM.countedQuantity} property for query construction.
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
   * Representation of the {@link InventoryPostingLineUoM.uoMCode} property for query construction.
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
   * Representation of the {@link InventoryPostingLineUoM.barCode} property for query construction.
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
   * Creates an instance of InventoryPostingLineUoMField.
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
      InventoryPostingLineUoM,
      fieldOptions
    );
  }
}

export namespace InventoryPostingLineUoM {
  /**
   * Metadata information on all properties of the `InventoryPostingLineUoM` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryPostingLineUoM>[] =
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
      }
    ];
}
