/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ExtendedTranslationParams
 */
export interface ExtendedTranslationParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Id.
   * @nullable
   */
  id?: string;
  /**
   * Secondary Id.
   * @nullable
   */
  secondaryId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationParams.build]] instead.
 */
export function createExtendedTranslationParams(json: any): ExtendedTranslationParams {
  return ExtendedTranslationParams.build(json);
}

/**
 * ExtendedTranslationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedTranslationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExtendedTranslationParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ID', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedTranslationParams.secondaryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  secondaryId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SecondaryID', this, 'Edm.String');
}

export namespace ExtendedTranslationParams {
  export function build(json: { [keys: string]: FieldType }): ExtendedTranslationParams {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      ID: (id: string) => ({ id: edmToTs(id, 'Edm.String') }),
      SecondaryID: (secondaryId: string) => ({ secondaryId: edmToTs(secondaryId, 'Edm.String') })
    });
  }
}
