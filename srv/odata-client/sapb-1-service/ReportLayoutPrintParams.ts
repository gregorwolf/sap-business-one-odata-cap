/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ReportLayoutPrintParams
 */
export interface ReportLayoutPrintParams {
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: string;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutPrintParams.build]] instead.
 */
export function createReportLayoutPrintParams(json: any): ReportLayoutPrintParams {
  return ReportLayoutPrintParams.build(json);
}

/**
 * ReportLayoutPrintParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutPrintParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ReportLayoutPrintParams.layoutCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutCode', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutPrintParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
}

export namespace ReportLayoutPrintParams {
  export function build(json: { [keys: string]: FieldType }): ReportLayoutPrintParams {
    return createComplexType(json, {
      LayoutCode: (layoutCode: string) => ({ layoutCode: edmToTs(layoutCode, 'Edm.String') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') })
    });
  }
}
