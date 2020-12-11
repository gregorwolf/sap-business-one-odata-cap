/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ProductionOrdersSalesOrderLine
 */
export interface ProductionOrdersSalesOrderLine {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Base Number.
   * @nullable
   */
  baseNumber?: number;
  /**
   * Base Abs Entry.
   * @nullable
   */
  baseAbsEntry?: number;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ProductionOrdersSalesOrderLine.build]] instead.
 */
export function createProductionOrdersSalesOrderLine(json: any): ProductionOrdersSalesOrderLine {
  return ProductionOrdersSalesOrderLine.build(json);
}

/**
 * ProductionOrdersSalesOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductionOrdersSalesOrderLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductionOrdersSalesOrderLine> {
  /**
   * Representation of the [[ProductionOrdersSalesOrderLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrdersSalesOrderLine.baseNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrdersSalesOrderLine.baseAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrdersSalesOrderLine.baseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLine', this, 'Edm.Int32');

  /**
   * Creates an instance of ProductionOrdersSalesOrderLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProductionOrdersSalesOrderLine);
  }
}

export namespace ProductionOrdersSalesOrderLine {
  /**
   * Metadata information on all properties of the `ProductionOrdersSalesOrderLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductionOrdersSalesOrderLine>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseNumber',
    name: 'baseNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseAbsEntry',
    name: 'baseAbsEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseLine',
    name: 'baseLine',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ProductionOrdersSalesOrderLine {
    return deserializeComplexTypeV4(json, ProductionOrdersSalesOrderLine);
  }
}
