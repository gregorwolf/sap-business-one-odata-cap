/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentPackageItem } from './DocumentPackageItem';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentPackage
 */
export interface DocumentPackage {
  /**
   * Number.
   * @nullable
   */
  number?: number;
  /**
   * Type.
   * @nullable
   */
  type?: string;
  /**
   * Total Weight.
   * @nullable
   */
  totalWeight?: number;
  /**
   * Units.
   * @nullable
   */
  units?: number;
  /**
   * Document Package Items.
   * @nullable
   */
  documentPackageItems?: DocumentPackageItem[];
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentPackage.build]] instead.
 */
export function createDocumentPackage(json: any): DocumentPackage {
  return DocumentPackage.build(json);
}

/**
 * DocumentPackageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentPackageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentPackage> {
  /**
   * Representation of the [[DocumentPackage.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Number', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentPackage.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Type', this, 'Edm.String');
  /**
   * Representation of the [[DocumentPackage.totalWeight]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalWeight: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalWeight', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentPackage.units]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  units: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Units', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentPackage.documentPackageItems]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPackageItems: CollectionField<EntityT, DocumentPackageItem> = new CollectionField('DocumentPackageItems', this, DocumentPackageItem);

  /**
   * Creates an instance of DocumentPackageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentPackage);
  }
}

export namespace DocumentPackage {
  /**
   * Metadata information on all properties of the `DocumentPackage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentPackage>[] = [{
    originalName: 'Number',
    name: 'number',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TotalWeight',
    name: 'totalWeight',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Units',
    name: 'units',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentPackageItems',
    name: 'documentPackageItems',
    type: DocumentPackageItem,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | DocumentPackageItem }): DocumentPackage {
    return deserializeComplexTypeV4(json, DocumentPackage);
  }
}
