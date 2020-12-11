/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ReportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportParams> {
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

  /**
   * Creates an instance of ReportParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReportParams);
  }
}

export namespace ReportParams {
  /**
   * Metadata information on all properties of the `ReportParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportParams>[] = [{
    originalName: 'ReportCode',
    name: 'reportCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UserID',
    name: 'userId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReportParams {
    return deserializeComplexTypeV4(json, ReportParams);
  }
}
