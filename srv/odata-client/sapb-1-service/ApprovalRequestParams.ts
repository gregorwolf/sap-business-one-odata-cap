/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoApprovalRequestStatusEnum } from './BoApprovalRequestStatusEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ApprovalRequestParams
 */
export interface ApprovalRequestParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Status.
   * @nullable
   */
  status?: BoApprovalRequestStatusEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestParams.build]] instead.
 */
export function createApprovalRequestParams(json: any): ApprovalRequestParams {
  return ApprovalRequestParams.build(json);
}

/**
 * ApprovalRequestParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalRequestParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalRequestParams> {
  /**
   * Representation of the [[ApprovalRequestParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[ApprovalRequestParams.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[ApprovalRequestParams.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);

  /**
   * Creates an instance of ApprovalRequestParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ApprovalRequestParams);
  }
}

export namespace ApprovalRequestParams {
  /**
   * Metadata information on all properties of the `ApprovalRequestParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalRequestParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ApprovalRequestParams {
    return deserializeComplexTypeV4(json, ApprovalRequestParams);
  }
}
