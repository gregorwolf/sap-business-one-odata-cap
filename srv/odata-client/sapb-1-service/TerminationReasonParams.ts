/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TerminationReasonParams
 */
export interface TerminationReasonParams {
  /**
   * Reason Id.
   * @nullable
   */
  reasonId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TerminationReasonParams.build]] instead.
 */
export function createTerminationReasonParams(json: any): TerminationReasonParams {
  return TerminationReasonParams.build(json);
}

/**
 * TerminationReasonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TerminationReasonParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TerminationReasonParams.reasonId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reasonId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReasonID', this, 'Edm.Int32');
  /**
   * Representation of the [[TerminationReasonParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[TerminationReasonParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
}

export namespace TerminationReasonParams {
  export function build(json: { [keys: string]: FieldType }): TerminationReasonParams {
    return createComplexType(json, {
      ReasonID: (reasonId: number) => ({ reasonId: edmToTs(reasonId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}
