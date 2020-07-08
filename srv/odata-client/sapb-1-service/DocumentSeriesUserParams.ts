/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocumentSeriesUserParams
 */
export interface DocumentSeriesUserParams {
  /**
   * Document.
   * @nullable
   */
  document?: string;
  /**
   * Document Sub Type.
   * @nullable
   */
  documentSubType?: string;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * User.
   * @nullable
   */
  user?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentSeriesUserParams.build]] instead.
 */
export function createDocumentSeriesUserParams(json: any): DocumentSeriesUserParams {
  return DocumentSeriesUserParams.build(json);
}

/**
 * DocumentSeriesUserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentSeriesUserParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentSeriesUserParams.document]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Document', this, 'Edm.String');
  /**
   * Representation of the [[DocumentSeriesUserParams.documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentSubType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentSubType', this, 'Edm.String');
  /**
   * Representation of the [[DocumentSeriesUserParams.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentSeriesUserParams.user]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('User', this, 'Edm.Int32');
}

export namespace DocumentSeriesUserParams {
  export function build(json: { [keys: string]: FieldType }): DocumentSeriesUserParams {
    return createComplexType(json, {
      Document: (document: string) => ({ document: edmToTs(document, 'Edm.String') }),
      DocumentSubType: (documentSubType: string) => ({ documentSubType: edmToTs(documentSubType, 'Edm.String') }),
      Series: (series: number) => ({ series: edmToTs(series, 'Edm.Int32') }),
      User: (user: number) => ({ user: edmToTs(user, 'Edm.Int32') })
    });
  }
}
