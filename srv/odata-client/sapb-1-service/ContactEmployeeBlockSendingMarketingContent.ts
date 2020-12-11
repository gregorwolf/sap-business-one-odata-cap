/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Choose.
   * @nullable
   */
  choose?: BoYesNoEnum;
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
export class ContactEmployeeBlockSendingMarketingContentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ContactEmployeeBlockSendingMarketingContent> {
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
  /**
   * Representation of the [[ContactEmployeeBlockSendingMarketingContent.choose]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  choose: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Choose', this);

  /**
   * Creates an instance of ContactEmployeeBlockSendingMarketingContentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ContactEmployeeBlockSendingMarketingContent);
  }
}

export namespace ContactEmployeeBlockSendingMarketingContent {
  /**
   * Metadata information on all properties of the `ContactEmployeeBlockSendingMarketingContent` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ContactEmployeeBlockSendingMarketingContent>[] = [{
    originalName: 'ContactEmployeeAbsEntry',
    name: 'contactEmployeeAbsEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CommunicationMediaId',
    name: 'communicationMediaId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Choose',
    name: 'choose',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ContactEmployeeBlockSendingMarketingContent {
    return deserializeComplexTypeV4(json, ContactEmployeeBlockSendingMarketingContent);
  }
}
