/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class QueueMemberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace QueueMember {
  export function build(json: { [keys: string]: FieldType }): QueueMember {
    return createComplexType(json, {
      QueueID: (queueId: string) => ({ queueId: edmToTs(queueId, 'Edm.String') }),
      MemberUserID: (memberUserId: number) => ({ memberUserId: edmToTs(memberUserId, 'Edm.Int32') })
    });
  }
}
