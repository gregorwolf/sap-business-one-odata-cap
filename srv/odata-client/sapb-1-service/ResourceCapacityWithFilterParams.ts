/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ResourceCapacityWithFilterParams
 */
export interface ResourceCapacityWithFilterParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityWithFilterParams.build]] instead.
 */
export function createResourceCapacityWithFilterParams(json: any): ResourceCapacityWithFilterParams {
  return ResourceCapacityWithFilterParams.build(json);
}

/**
 * ResourceCapacityWithFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceCapacityWithFilterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ResourceCapacityWithFilterParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityWithFilterParams.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityWithFilterParams.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
}

export namespace ResourceCapacityWithFilterParams {
  export function build(json: { [keys: string]: FieldType }): ResourceCapacityWithFilterParams {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') }),
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') })
    });
  }
}
