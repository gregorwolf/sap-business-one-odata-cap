/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ContactEmployeeBlockSendingMarketingContent
 */
export interface ContactEmployeeBlockSendingMarketingContent {
  /**
   * Contact Employee Abs Entry.
   * @nullable
   */
  contactEmployeeAbsEntry?: number;
  /**
   * Communication Media Id.
   * @nullable
   */
  communicationMediaId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ContactEmployeeBlockSendingMarketingContent.build]] instead.
 */
export function createContactEmployeeBlockSendingMarketingContent(json: any): ContactEmployeeBlockSendingMarketingContent {
  return ContactEmployeeBlockSendingMarketingContent.build(json);
}

/**
 * ContactEmployeeBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ContactEmployeeBlockSendingMarketingContentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ContactEmployeeBlockSendingMarketingContent.contactEmployeeAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactEmployeeAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ContactEmployeeAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ContactEmployeeBlockSendingMarketingContent.communicationMediaId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  communicationMediaId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CommunicationMediaId', this, 'Edm.Int32');
}

export namespace ContactEmployeeBlockSendingMarketingContent {
  export function build(json: { [keys: string]: FieldType }): ContactEmployeeBlockSendingMarketingContent {
    return createComplexType(json, {
      ContactEmployeeAbsEntry: (contactEmployeeAbsEntry: number) => ({ contactEmployeeAbsEntry: edmToTs(contactEmployeeAbsEntry, 'Edm.Int32') }),
      CommunicationMediaId: (communicationMediaId: number) => ({ communicationMediaId: edmToTs(communicationMediaId, 'Edm.Int32') })
    });
  }
}
