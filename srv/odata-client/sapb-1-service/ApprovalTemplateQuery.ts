/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ApprovalTemplateQuery
 */
export interface ApprovalTemplateQuery {
  /**
   * Query Id.
   * @nullable
   */
  queryId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateQuery.build]] instead.
 */
export function createApprovalTemplateQuery(json: any): ApprovalTemplateQuery {
  return ApprovalTemplateQuery.build(json);
}

/**
 * ApprovalTemplateQueryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateQueryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ApprovalTemplateQuery.queryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('QueryID', this, 'Edm.Int32');
}

export namespace ApprovalTemplateQuery {
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateQuery {
    return createComplexType(json, {
      QueryID: (queryId: number) => ({ queryId: edmToTs(queryId, 'Edm.Int32') })
    });
  }
}
