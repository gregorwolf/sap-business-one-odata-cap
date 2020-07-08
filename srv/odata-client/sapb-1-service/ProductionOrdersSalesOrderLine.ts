/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ProductionOrdersSalesOrderLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ProductionOrdersSalesOrderLine {
  export function build(json: { [keys: string]: FieldType }): ProductionOrdersSalesOrderLine {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      BaseNumber: (baseNumber: number) => ({ baseNumber: edmToTs(baseNumber, 'Edm.Int32') }),
      BaseAbsEntry: (baseAbsEntry: number) => ({ baseAbsEntry: edmToTs(baseAbsEntry, 'Edm.Int32') }),
      BaseLine: (baseLine: number) => ({ baseLine: edmToTs(baseLine, 'Edm.Int32') })
    });
  }
}
