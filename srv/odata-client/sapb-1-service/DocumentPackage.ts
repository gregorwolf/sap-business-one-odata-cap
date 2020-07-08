/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentPackageItem, DocumentPackageItemField } from './DocumentPackageItem';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
  documentPackageItems?: DocumentPackageItem;
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
export class DocumentPackageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
  documentPackageItems: DocumentPackageItemField<EntityT> = new DocumentPackageItemField('DocumentPackageItems', this);
}

export namespace DocumentPackage {
  export function build(json: { [keys: string]: FieldType | DocumentPackageItem }): DocumentPackage {
    return createComplexType(json, {
      Number: (number: number) => ({ number: edmToTs(number, 'Edm.Int32') }),
      Type: (type: string) => ({ type: edmToTs(type, 'Edm.String') }),
      TotalWeight: (totalWeight: number) => ({ totalWeight: edmToTs(totalWeight, 'Edm.Double') }),
      Units: (units: number) => ({ units: edmToTs(units, 'Edm.Int32') }),
      DocumentPackageItems: (documentPackageItems: DocumentPackageItem) => ({ documentPackageItems: DocumentPackageItem.build(documentPackageItems) })
    });
  }
}
