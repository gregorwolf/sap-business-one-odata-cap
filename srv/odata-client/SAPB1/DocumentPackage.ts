/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentPackageItem } from './DocumentPackageItem';
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
 * DocumentPackage
 */
export interface DocumentPackage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Number.
   * @nullable
   */
  number?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Total Weight.
   * @nullable
   */
  totalWeight?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Units.
   * @nullable
   */
  units?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Package Items.
   * @nullable
   */
  documentPackageItems?: DeserializedType<
    DeSerializersT,
    'SAPB1.DocumentPackageItem'
  >;
}

/**
 * DocumentPackageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentPackageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentPackage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentPackage.number} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Number', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentPackage.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentPackage.totalWeight} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalWeight: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalWeight', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentPackage.units} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  units: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Units', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentPackage.documentPackageItems} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPackageItems: CollectionField<
    EntityT,
    DeSerializersT,
    DocumentPackageItem,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'DocumentPackageItems',
    DocumentPackageItem,
    true
  );

  /**
   * Creates an instance of DocumentPackageField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DocumentPackage, fieldOptions);
  }
}

export namespace DocumentPackage {
  /**
   * Metadata information on all properties of the `DocumentPackage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentPackage>[] = [
    {
      originalName: 'Number',
      name: 'number',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TotalWeight',
      name: 'totalWeight',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Units',
      name: 'units',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentPackageItems',
      name: 'documentPackageItems',
      type: DocumentPackageItem,
      isCollection: true
    }
  ];
}
