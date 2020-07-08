/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * Recipient
 */
export interface Recipient {
  /**
   * User Code.
   * @nullable
   */
  userCode?: string;
  /**
   * Name To.
   * @nullable
   */
  nameTo?: string;
  /**
   * Email Address.
   * @nullable
   */
  emailAddress?: string;
  /**
   * Cellular Number.
   * @nullable
   */
  cellularNumber?: string;
  /**
   * Fax Number.
   * @nullable
   */
  faxNumber?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[Recipient.build]] instead.
 */
export function createRecipient(json: any): Recipient {
  return Recipient.build(json);
}

/**
 * RecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RecipientField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Recipient.userCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserCode', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.nameTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nameTo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NameTo', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailAddress: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EmailAddress', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.cellularNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cellularNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CellularNumber', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faxNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FaxNumber', this, 'Edm.String');
}

export namespace Recipient {
  export function build(json: { [keys: string]: FieldType }): Recipient {
    return createComplexType(json, {
      UserCode: (userCode: string) => ({ userCode: edmToTs(userCode, 'Edm.String') }),
      NameTo: (nameTo: string) => ({ nameTo: edmToTs(nameTo, 'Edm.String') }),
      EmailAddress: (emailAddress: string) => ({ emailAddress: edmToTs(emailAddress, 'Edm.String') }),
      CellularNumber: (cellularNumber: string) => ({ cellularNumber: edmToTs(cellularNumber, 'Edm.String') }),
      FaxNumber: (faxNumber: string) => ({ faxNumber: edmToTs(faxNumber, 'Edm.String') })
    });
  }
}
