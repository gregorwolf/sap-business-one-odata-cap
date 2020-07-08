/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class BlanketAgreementParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BlanketAgreementParams.agreementNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementNo', this, 'Edm.Int32');
}

export namespace BlanketAgreementParams {
  export function build(json: { [keys: string]: FieldType }): BlanketAgreementParams {
    return createComplexType(json, {
      AgreementNo: (agreementNo: number) => ({ agreementNo: edmToTs(agreementNo, 'Edm.Int32') })
    });
  }
}
