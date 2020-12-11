/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ApprovalTemplateQueryField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateQuery> {
  /**
   * Representation of the [[ApprovalTemplateQuery.queryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('QueryID', this, 'Edm.Int32');

  /**
   * Creates an instance of ApprovalTemplateQueryField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ApprovalTemplateQuery);
  }
}

export namespace ApprovalTemplateQuery {
  /**
   * Metadata information on all properties of the `ApprovalTemplateQuery` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalTemplateQuery>[] = [{
    originalName: 'QueryID',
    name: 'queryId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateQuery {
    return deserializeComplexTypeV4(json, ApprovalTemplateQuery);
  }
}
