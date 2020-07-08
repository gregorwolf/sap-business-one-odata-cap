/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WarehouseSublevelCodeParams
 */
export interface WarehouseSublevelCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Warehouse Sublevel.
   * @nullable
   */
  warehouseSublevel?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WarehouseSublevelCodeParams.build]] instead.
 */
export function createWarehouseSublevelCodeParams(json: any): WarehouseSublevelCodeParams {
  return WarehouseSublevelCodeParams.build(json);
}

/**
 * WarehouseSublevelCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WarehouseSublevelCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WarehouseSublevelCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WarehouseSublevelCodeParams.warehouseSublevel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseSublevel: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WarehouseSublevel', this, 'Edm.Int32');
  /**
   * Representation of the [[WarehouseSublevelCodeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
}

export namespace WarehouseSublevelCodeParams {
  export function build(json: { [keys: string]: FieldType }): WarehouseSublevelCodeParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      WarehouseSublevel: (warehouseSublevel: number) => ({ warehouseSublevel: edmToTs(warehouseSublevel, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
