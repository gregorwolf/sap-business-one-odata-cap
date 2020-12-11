/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * QueueMember
 */
export interface QueueMember {
  /**
   * Queue Id.
   * @nullable
   */
  queueId?: string;
  /**
   * Member User Id.
   * @nullable
   */
  memberUserId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[QueueMember.build]] instead.
 */
export function createQueueMember(json: any): QueueMember {
  return QueueMember.build(json);
}

/**
 * QueueMemberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class QueueMemberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, QueueMember> {
  /**
   * Representation of the [[QueueMember.queueId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queueId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('QueueID', this, 'Edm.String');
  /**
   * Representation of the [[QueueMember.memberUserId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memberUserId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MemberUserID', this, 'Edm.Int32');

  /**
   * Creates an instance of QueueMemberField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, QueueMember);
  }
}

export namespace QueueMember {
  /**
   * Metadata information on all properties of the `QueueMember` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<QueueMember>[] = [{
    originalName: 'QueueID',
    name: 'queueId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MemberUserID',
    name: 'memberUserId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): QueueMember {
    return deserializeComplexTypeV4(json, QueueMember);
  }
}
