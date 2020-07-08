/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WipMapping
 */
export interface WipMapping {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Account From.
   * @nullable
   */
  accountFrom?: string;
  /**
   * Account To.
   * @nullable
   */
  accountTo?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WipMapping.build]] instead.
 */
export function createWipMapping(json: any): WipMapping {
  return WipMapping.build(json);
}

/**
 * WipMappingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WipMappingField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WipMapping.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WipMapping.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[WipMapping.accountFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountFrom: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountFrom', this, 'Edm.String');
  /**
   * Representation of the [[WipMapping.accountTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountTo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountTo', this, 'Edm.String');
}

export namespace WipMapping {
  export function build(json: { [keys: string]: FieldType }): WipMapping {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      AccountFrom: (accountFrom: string) => ({ accountFrom: edmToTs(accountFrom, 'Edm.String') }),
      AccountTo: (accountTo: string) => ({ accountTo: edmToTs(accountTo, 'Edm.String') })
    });
  }
}
