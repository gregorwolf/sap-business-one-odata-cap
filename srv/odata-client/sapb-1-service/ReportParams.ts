/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ReportParams
 */
export interface ReportParams {
  /**
   * Report Code.
   * @nullable
   */
  reportCode?: string;
  /**
   * User Id.
   * @nullable
   */
  userId?: number;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ReportParams.build]] instead.
 */
export function createReportParams(json: any): ReportParams {
  return ReportParams.build(json);
}

/**
 * ReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ReportParams.reportCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportCode', this, 'Edm.String');
  /**
   * Representation of the [[ReportParams.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserID', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
}

export namespace ReportParams {
  export function build(json: { [keys: string]: FieldType }): ReportParams {
    return createComplexType(json, {
      ReportCode: (reportCode: string) => ({ reportCode: edmToTs(reportCode, 'Edm.String') }),
      UserID: (userId: number) => ({ userId: edmToTs(userId, 'Edm.Int32') }),
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') })
    });
  }
}
