/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * NfTaxCategoryParams
 */
export interface NfTaxCategoryParams {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[NfTaxCategoryParams.build]] instead.
 */
export function createNfTaxCategoryParams(json: any): NfTaxCategoryParams {
  return NfTaxCategoryParams.build(json);
}

/**
 * NfTaxCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class NfTaxCategoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, NfTaxCategoryParams> {
  /**
   * Representation of the [[NfTaxCategoryParams.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[NfTaxCategoryParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');

  /**
   * Creates an instance of NfTaxCategoryParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, NfTaxCategoryParams);
  }
}

export namespace NfTaxCategoryParams {
  /**
   * Metadata information on all properties of the `NfTaxCategoryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<NfTaxCategoryParams>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): NfTaxCategoryParams {
    return deserializeComplexTypeV4(json, NfTaxCategoryParams);
  }
}
