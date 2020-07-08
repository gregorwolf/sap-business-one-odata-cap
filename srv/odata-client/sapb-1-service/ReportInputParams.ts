/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ReportInputParams
 */
export interface ReportInputParams {
  /**
   * Report Layout Menu Id.
   * @nullable
   */
  reportLayoutMenuId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ReportInputParams.build]] instead.
 */
export function createReportInputParams(json: any): ReportInputParams {
  return ReportInputParams.build(json);
}

/**
 * ReportInputParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportInputParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ReportInputParams.reportLayoutMenuId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportLayoutMenuId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportLayoutMenuID', this, 'Edm.String');
}

export namespace ReportInputParams {
  export function build(json: { [keys: string]: FieldType }): ReportInputParams {
    return createComplexType(json, {
      ReportLayoutMenuID: (reportLayoutMenuId: string) => ({ reportLayoutMenuId: edmToTs(reportLayoutMenuId, 'Edm.String') })
    });
  }
}
