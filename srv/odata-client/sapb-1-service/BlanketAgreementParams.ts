/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BlanketAgreementParams
 */
export interface BlanketAgreementParams {
  /**
   * Agreement No.
   * @nullable
   */
  agreementNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementParams.build]] instead.
 */
export function createBlanketAgreementParams(json: any): BlanketAgreementParams {
  return BlanketAgreementParams.build(json);
}

/**
 * BlanketAgreementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlanketAgreementParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlanketAgreementParams> {
  /**
   * Representation of the [[BlanketAgreementParams.agreementNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementNo', this, 'Edm.Int32');

  /**
   * Creates an instance of BlanketAgreementParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BlanketAgreementParams);
  }
}

export namespace BlanketAgreementParams {
  /**
   * Metadata information on all properties of the `BlanketAgreementParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlanketAgreementParams>[] = [{
    originalName: 'AgreementNo',
    name: 'agreementNo',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BlanketAgreementParams {
    return deserializeComplexTypeV4(json, BlanketAgreementParams);
  }
}
