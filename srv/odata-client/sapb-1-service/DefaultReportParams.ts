/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DefaultReportParams
 */
export interface DefaultReportParams {
  /**
   * Report Code.
   * @nullable
   */
  reportCode?: string;
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: string;
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
 * @deprecated Since v1.6.0. Use [[DefaultReportParams.build]] instead.
 */
export function createDefaultReportParams(json: any): DefaultReportParams {
  return DefaultReportParams.build(json);
}

/**
 * DefaultReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DefaultReportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DefaultReportParams.reportCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportCode', this, 'Edm.String');
  /**
   * Representation of the [[DefaultReportParams.layoutCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutCode', this, 'Edm.String');
  /**
   * Representation of the [[DefaultReportParams.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserID', this, 'Edm.Int32');
  /**
   * Representation of the [[DefaultReportParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
}

export namespace DefaultReportParams {
  export function build(json: { [keys: string]: FieldType }): DefaultReportParams {
    return createComplexType(json, {
      ReportCode: (reportCode: string) => ({ reportCode: edmToTs(reportCode, 'Edm.String') }),
      LayoutCode: (layoutCode: string) => ({ layoutCode: edmToTs(layoutCode, 'Edm.String') }),
      UserID: (userId: number) => ({ userId: edmToTs(userId, 'Edm.Int32') }),
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') })
    });
  }
}
