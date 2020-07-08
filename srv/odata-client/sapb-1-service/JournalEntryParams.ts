/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * JournalEntryParams
 */
export interface JournalEntryParams {
  /**
   * Jdt Num.
   * @nullable
   */
  jdtNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[JournalEntryParams.build]] instead.
 */
export function createJournalEntryParams(json: any): JournalEntryParams {
  return JournalEntryParams.build(json);
}

/**
 * JournalEntryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class JournalEntryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[JournalEntryParams.jdtNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jdtNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('JdtNum', this, 'Edm.Int32');
}

export namespace JournalEntryParams {
  export function build(json: { [keys: string]: FieldType }): JournalEntryParams {
    return createComplexType(json, {
      JdtNum: (jdtNum: number) => ({ jdtNum: edmToTs(jdtNum, 'Edm.Int32') })
    });
  }
}
