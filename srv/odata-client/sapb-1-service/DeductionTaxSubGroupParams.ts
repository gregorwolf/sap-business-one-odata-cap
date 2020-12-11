/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DeductionTaxSubGroupParams
 */
export interface DeductionTaxSubGroupParams {
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: string;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxSubGroupParams.build]] instead.
 */
export function createDeductionTaxSubGroupParams(json: any): DeductionTaxSubGroupParams {
  return DeductionTaxSubGroupParams.build(json);
}

/**
 * DeductionTaxSubGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeductionTaxSubGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DeductionTaxSubGroupParams> {
  /**
   * Representation of the [[DeductionTaxSubGroupParams.groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GroupCode', this, 'Edm.String');
  /**
   * Representation of the [[DeductionTaxSubGroupParams.groupName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GroupName', this, 'Edm.String');

  /**
   * Creates an instance of DeductionTaxSubGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DeductionTaxSubGroupParams);
  }
}

export namespace DeductionTaxSubGroupParams {
  /**
   * Metadata information on all properties of the `DeductionTaxSubGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DeductionTaxSubGroupParams>[] = [{
    originalName: 'GroupCode',
    name: 'groupCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GroupName',
    name: 'groupName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DeductionTaxSubGroupParams {
    return deserializeComplexTypeV4(json, DeductionTaxSubGroupParams);
  }
}
