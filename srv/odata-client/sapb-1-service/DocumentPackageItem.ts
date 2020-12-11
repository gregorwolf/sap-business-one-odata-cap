/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentPackageItem
 */
export interface DocumentPackageItem {
  /**
   * Package Number.
   * @nullable
   */
  packageNumber?: number;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Measure Unit.
   * @nullable
   */
  measureUnit?: string;
  /**
   * Units Of Measurement.
   * @nullable
   */
  unitsOfMeasurement?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentPackageItem.build]] instead.
 */
export function createDocumentPackageItem(json: any): DocumentPackageItem {
  return DocumentPackageItem.build(json);
}

/**
 * DocumentPackageItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentPackageItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentPackageItem> {
  /**
   * Representation of the [[DocumentPackageItem.packageNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packageNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PackageNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentPackageItem.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentPackageItem.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentPackageItem.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentPackageItem.measureUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  measureUnit: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MeasureUnit', this, 'Edm.String');
  /**
   * Representation of the [[DocumentPackageItem.unitsOfMeasurement]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurement: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitsOfMeasurement', this, 'Edm.Double');

  /**
   * Creates an instance of DocumentPackageItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentPackageItem);
  }
}

export namespace DocumentPackageItem {
  /**
   * Metadata information on all properties of the `DocumentPackageItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentPackageItem>[] = [{
    originalName: 'PackageNumber',
    name: 'packageNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'MeasureUnit',
    name: 'measureUnit',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UnitsOfMeasurement',
    name: 'unitsOfMeasurement',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocumentPackageItem {
    return deserializeComplexTypeV4(json, DocumentPackageItem);
  }
}
