/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ProfitCenterParams
 */
export interface ProfitCenterParams {
  /**
   * Center Code.
   * @nullable
   */
  centerCode?: string;
  /**
   * Center Name.
   * @nullable
   */
  centerName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ProfitCenterParams.build]] instead.
 */
export function createProfitCenterParams(json: any): ProfitCenterParams {
  return ProfitCenterParams.build(json);
}

/**
 * ProfitCenterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProfitCenterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProfitCenterParams> {
  /**
   * Representation of the [[ProfitCenterParams.centerCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  centerCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CenterCode', this, 'Edm.String');
  /**
   * Representation of the [[ProfitCenterParams.centerName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  centerName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CenterName', this, 'Edm.String');

  /**
   * Creates an instance of ProfitCenterParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProfitCenterParams);
  }
}

export namespace ProfitCenterParams {
  /**
   * Metadata information on all properties of the `ProfitCenterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProfitCenterParams>[] = [{
    originalName: 'CenterCode',
    name: 'centerCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CenterName',
    name: 'centerName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ProfitCenterParams {
    return deserializeComplexTypeV4(json, ProfitCenterParams);
  }
}
