/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CustomsGroupParams
 */
export interface CustomsGroupParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Port Address.
   * @nullable
   */
  portAddress?: string;
  /**
   * Port State.
   * @nullable
   */
  portState?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CustomsGroupParams.build]] instead.
 */
export function createCustomsGroupParams(json: any): CustomsGroupParams {
  return CustomsGroupParams.build(json);
}

/**
 * CustomsGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CustomsGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CustomsGroupParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[CustomsGroupParams.portAddress]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portAddress: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PortAddress', this, 'Edm.String');
  /**
   * Representation of the [[CustomsGroupParams.portState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PortState', this, 'Edm.String');
}

export namespace CustomsGroupParams {
  export function build(json: { [keys: string]: FieldType }): CustomsGroupParams {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') }),
      PortAddress: (portAddress: string) => ({ portAddress: edmToTs(portAddress, 'Edm.String') }),
      PortState: (portState: string) => ({ portState: edmToTs(portState, 'Edm.String') })
    });
  }
}
