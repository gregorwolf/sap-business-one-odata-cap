/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ReportLayoutParams
 */
export interface ReportLayoutParams {
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: string;
  /**
   * Layout Name.
   * @nullable
   */
  layoutName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutParams.build]] instead.
 */
export function createReportLayoutParams(json: any): ReportLayoutParams {
  return ReportLayoutParams.build(json);
}

/**
 * ReportLayoutParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ReportLayoutParams.layoutCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutCode', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutParams.layoutName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutName', this, 'Edm.String');
}

export namespace ReportLayoutParams {
  export function build(json: { [keys: string]: FieldType }): ReportLayoutParams {
    return createComplexType(json, {
      LayoutCode: (layoutCode: string) => ({ layoutCode: edmToTs(layoutCode, 'Edm.String') }),
      LayoutName: (layoutName: string) => ({ layoutName: edmToTs(layoutName, 'Edm.String') })
    });
  }
}
