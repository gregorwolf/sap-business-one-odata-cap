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
 * AssetDocumentNewLoc
 */
export interface AssetDocumentNewLoc<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Asset Number.
   * @nullable
   */
  assetNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cur Location.
   * @nullable
   */
  curLocation?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * New Location.
   * @nullable
   */
  newLocation?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Nbv.
   * @nullable
   */
  nbv?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * AssetDocumentNewLocField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetDocumentNewLocField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AssetDocumentNewLoc,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AssetDocumentNewLoc.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link AssetDocumentNewLoc.lineNumber} property for query construction.
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
   * Representation of the {@link AssetDocumentNewLoc.assetNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assetNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AssetNumber', 'Edm.String', true);
  /**
   * Representation of the {@link AssetDocumentNewLoc.curLocation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  curLocation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CurLocation', 'Edm.Int32', true);
  /**
   * Representation of the {@link AssetDocumentNewLoc.newLocation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newLocation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NewLocation', 'Edm.Int32', true);
  /**
   * Representation of the {@link AssetDocumentNewLoc.nbv} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nbv: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NBV', 'Edm.Double', true);
  /**
   * Representation of the {@link AssetDocumentNewLoc.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);

  /**
   * Creates an instance of AssetDocumentNewLocField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AssetDocumentNewLoc, fieldOptions);
  }
}

export namespace AssetDocumentNewLoc {
  /**
   * Metadata information on all properties of the `AssetDocumentNewLoc` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetDocumentNewLoc>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
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
      originalName: 'AssetNumber',
      name: 'assetNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CurLocation',
      name: 'curLocation',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NewLocation',
      name: 'newLocation',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NBV',
      name: 'nbv',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
