/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * IndiaSacCodeParams
 */
export interface IndiaSacCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Service Code.
   * @nullable
   */
  serviceCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[IndiaSacCodeParams.build]] instead.
 */
export function createIndiaSacCodeParams(json: any): IndiaSacCodeParams {
  return IndiaSacCodeParams.build(json);
}

/**
 * IndiaSacCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class IndiaSacCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[IndiaSacCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[IndiaSacCodeParams.serviceCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ServiceCode', this, 'Edm.String');
}

export namespace IndiaSacCodeParams {
  export function build(json: { [keys: string]: FieldType }): IndiaSacCodeParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      ServiceCode: (serviceCode: string) => ({ serviceCode: edmToTs(serviceCode, 'Edm.String') })
    });
  }
}
