/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceGroupParams
 */
export interface ServiceGroupParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Service Group Code.
   * @nullable
   */
  serviceGroupCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceGroupParams.build]] instead.
 */
export function createServiceGroupParams(json: any): ServiceGroupParams {
  return ServiceGroupParams.build(json);
}

/**
 * ServiceGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceGroupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceGroupParams.serviceGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ServiceGroupCode', this, 'Edm.String');
}

export namespace ServiceGroupParams {
  export function build(json: { [keys: string]: FieldType }): ServiceGroupParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      ServiceGroupCode: (serviceGroupCode: string) => ({ serviceGroupCode: edmToTs(serviceGroupCode, 'Edm.String') })
    });
  }
}
