/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceAppReportParams
 */
export interface ServiceAppReportParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReportParams.build]] instead.
 */
export function createServiceAppReportParams(json: any): ServiceAppReportParams {
  return ServiceAppReportParams.build(json);
}

/**
 * ServiceAppReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceAppReportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceAppReportParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
}

export namespace ServiceAppReportParams {
  export function build(json: { [keys: string]: FieldType }): ServiceAppReportParams {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') })
    });
  }
}
